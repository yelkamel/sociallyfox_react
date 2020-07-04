import { BarChart, Bar, Grid } from 'react-native-charts';
import React, { Component } from 'react';
import { Fonts, Colors, Metrics } from '../Themes/';

import { number, string } from 'prop-types';

export default class DataGraph extends Component {
  static propTypes = {
    subScoreList: arrayOf(number),
    subNameList: arrayOf(string),
  };
  constructor(props) {
    super(props);
    this.state = {
      IsOpen: false,
    };
  }

  render() {
    return (
      <BarChart
        dataSets={[
          {
            fillColor: Colors.secondaryaccent,
            data: [
              { value: this.props.subScoreList[0] },
              { value: this.props.subScoreList[2] },
            ],
          },
          {
            fillColor: Colors.accent,
            data: [
              { value: this.props.subScoreList[1] },
              { value: this.props.subScoreList[3] },
            ],
          },
        ]}
        graduation={1}
        horizontal={true}
        showGrid={true}
        barSpacing={Metrics.dataGraphSpacing}
        style={{
          height: Metrics.dataGraphHeight,
          margin: Metrics.dataGraphMargin,
        }}
      />
    );
  }
}
