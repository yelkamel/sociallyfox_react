import React from 'react';
import SubjectForm from './SubjectForm';
import SubjectItem from './SubjectItem';
import { AppState } from 'react-native';
import { Actions as NavigationActions } from 'react-native-router-flux';
import { string, number } from 'prop-types';

export default class SubjectCont extends React.Component {
  expWin = 0;
  duration = 0;
  subId = 99;
  static propTypes = {
    subName: string,
    exp: number,
  };

  static defaultProps = {};
  constructor() {
    super();
  }

  componentWillMount() {
    SubjectItem.SUB_LIST.map(cell => {
      if (this.props.subName === cell.name) {
        this.expWin = cell.expWin;
        this.duration = cell.duration;
        this.subId = cell.Id;
      }
    });
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  setNativeProps(nativeProps) {
    this._root.setNativeProps(nativeProps);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(currentAppState) {
    if (currentAppState === 'background') {
      NavigationActions.pop();
      setTimeout(() => {
        NavigationActions.refresh({ key: 'presentationScreen' });
      }, 10);
    }
  }
  render() {
    return (
      <SubjectForm
        duration={this.duration}
        hasButton={true}
        subName={this.props.subName}
        exp={this.props.exp}
        expWin={this.expWin}
        subTextList={SubjectItem.DESCR_LIST[this.subId]}
        subNote={SubjectItem.NOTE_LIST[this.subId]}
        subSample={SubjectItem.SAMPLE_LIST[this.subId]}
      />
    );
  }
}
