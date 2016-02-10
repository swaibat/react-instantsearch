import React from 'react';

import Template from '../Template.js';
import {isEqual} from 'lodash';

class RefinementListItem extends React.Component {
  componentWillMount() {
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  handleClick(e) {
    this.props.handleClick(this.props.facetValue, e);
  }

  render() {
    return (
      <div
        className={this.props.itemClassName}
        onClick={this.handleClick}
      >
        <Template
          data={this.props.templateData}
          templateKey={this.props.templateKey}
          {...this.props.templateProps}
        />
        {this.props.subItems}
      </div>
    );
  }
}

RefinementListItem.propTypes = {
  facetValue: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number
  ]).isRequired,
  handleClick: React.PropTypes.func.isRequired,
  itemClassName: React.PropTypes.string,
  subItems: React.PropTypes.object,
  templateData: React.PropTypes.object.isRequired,
  templateKey: React.PropTypes.string.isRequired,
  templateProps: React.PropTypes.object.isRequired
};

export default RefinementListItem;
