'use strict';

import React, { PropTypes } from 'react';
import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import { func, bool, node, element, number } from 'prop-types';

const propTypes = {
  onOpen: func,
  onClose: func,
  onSelect: func,
  itemRadius: number,
  menuRadius: number,
  spreadAngle: number,
  startAngle: number,
};

const defaultProps = {
  itemRadius: 30,
  menuRadius: 100,
  spreadAngle: 360,
  startAngle: 0,
};

export default class RadialAnswer extends React.Component {
  generateRadialPositions(count, radius, spread_angle, start_angle) {
    var span = spread_angle < 360 ? 1 : 0;
    var start = start_angle * Math.PI / 180;
    var rad = spread_angle * Math.PI * 2 / 360 / (count - span);
    return [...Array(count)].map((_, i) => {
      return {
        x: -Math.cos(start + rad * i) * radius,
        y: -Math.sin(start + rad * i) * radius,
      };
    });
  }

  constructor(props) {
    super(props);

    var children = this.childrenToArray();
    var initial_spots = this.generateRadialPositions(
      children.length - 1,
      this.props.menuRadius,
      this.props.spreadAngle,
      this.props.startAngle
    );
    initial_spots.unshift({ x: 0, y: 0 });

    this.state = {
      item_spots: initial_spots,
      item_anims: initial_spots.map((_, i) => {
        return new Animated.ValueXY();
      }),
      selectedItem: null,
      itemPanResponder: null,
      children: children,
      RMOpening: false,
    };
  }

  componentWillMount() {
    this.setState({ itemPanResponder: this.createPanResponder() });
  }

  // React.Children.toArray is still not exposed on RN 0.20.0-rc1
  childrenToArray() {
    let children = [];
    React.Children.forEach(this.props.children, child => {
      children.push(child);
    });
    return children;
  }

  itemPanListener = (e, gestureState) => {
    var newSelected = null;
    if (!this.state.RMOpening) {
      newSelected = this.computeNewSelected(gestureState);
      if (this.state.selectedItem !== newSelected) {
        if (this.state.selectedItem !== null) {
          var restSpot = this.state.item_spots[this.state.selectedItem];
          Animated.spring(this.state.item_anims[this.state.selectedItem], {
            toValue: restSpot,
          }).start();
        }
        if (newSelected !== null && newSelected !== 0) {
          Animated.spring(this.state.item_anims[newSelected], {
            toValue: this.state.item_anims[0],
          }).start();
        }
        this.state.selectedItem = newSelected;
      }
    }
  };

  releaseItem = () => {
    this.props.onClose && this.props.onClose();

    this.state.selectedItem &&
      !this.state.RMOpening &&
      this.state.children[this.state.selectedItem].props.onSelect &&
      this.state.children[this.state.selectedItem].props.onSelect();

    this.state.selectedItem = null;

    this.state.item_anims.forEach((item, i) => {
      Animated.spring(item, {
        toValue: { x: 0, y: 0 },
        tension: 60,
        friction: 10,
      }).start();
    });
  };

  createPanResponder() {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        this.props.onOpen && this.props.onOpen();
        this.setState({ RMOpening: true });
        Animated.stagger(
          40,
          this.state.item_spots.map((spot, idx) =>
            Animated.spring(this.state.item_anims[idx], {
              toValue: spot,
              friction: 6,
              tension: 80,
            })
          )
        ).start();
        // Make sure all items gets to innitial position
        // before we start tracking them
        setTimeout(() => {
          this.setState({ RMOpening: false });
        }, 500);
      },
      onPanResponderMove: Animated.event(
        [
          null,
          { dx: this.state.item_anims[0].x, dy: this.state.item_anims[0].y },
        ],
        { listener: this.itemPanListener }
      ),
      onPanResponderRelease: this.releaseItem,
      onPanResponderTerminate: this.releaseItem,
    });
  }

  computeNewSelected(gestureState: Object): ?number {
    var { dx, dy } = gestureState;
    var minDist = Infinity;
    var newSelected = null;
    var pointRadius = Math.sqrt(dx * dx + dy * dy);
    if (
      Math.abs(this.props.menuRadius - pointRadius) <
      this.props.menuRadius / 2
    ) {
      this.state.item_spots.forEach((spot, idx) => {
        var delta = { x: spot.x - dx, y: spot.y - dy };
        var dist = delta.x * delta.x + delta.y * delta.y;
        if (dist < minDist) {
          minDist = dist;
          newSelected = idx;
        }
      });
    }
    return newSelected;
  }

  render() {
    return (
      <View
        style={[
          {
            position: 'relative',
            backgroundColor: 'transparent',
            width: this.props.itemRadius * 2,
            height: this.props.itemRadius * 2,
          },
          this.props.style,
        ]}
      >
        {this.state.item_anims.map((_, i) => {
          var j = this.state.item_anims.length - i - 1;
          var handlers = j > 0 ? {} : this.state.itemPanResponder.panHandlers;
          return (
            <Animated.View
              {...handlers}
              key={i}
              style={{
                transform: this.state.item_anims[j].getTranslateTransform(),
                position: 'absolute',
              }}
            >
              {this.state.children[j]}
            </Animated.View>
          );
        })}
      </View>
    );
  }
}

RadialAnswer.propTypes = propTypes;
RadialAnswer.defaultProps = defaultProps;
