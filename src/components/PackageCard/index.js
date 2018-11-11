import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import isEqual from 'lodash/isEqual'
import Button from 'antd/lib/button';

const propTypes = {
  handleSave: PropTypes.func,
  handleCancel: PropTypes.func,
}

const defaultProps = {
  handleSave: () => {},
  handleCancel: () => {},
}


class PackageCard extends Component {
  state = {
    status: 0,
    dataSource: {
      id: "",
      location: "",
      status: "",
      packegPrice: 0,
      service: "",
      details: [],
      type: "",
    },
    isViewMore: false,
    numToShow: 4,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('nextProps.dataSource', nextProps.dataSource)
    if (!isEqual(nextProps.dataSource, prevState.dataSource)) {
      return {
        dataSource: nextProps.dataSource
      }
    }
    
    return null;
  }

  handleViewMore = () => {
    this.setState(prevState => ({
      isViewMore: !prevState.isViewMore,
      numToShow: !prevState.isViewMore ? prevState.dataSource.details.length : 4,
    }))
  }

  handleCancel = () => {
    const id = this.state.dataSource.applicationId;
    this.props.onCancel(id);
  }

  handleSave = () => {
    const id = this.state.dataSource.applicationId;
    this.setState({
      status: 0,
    })
    this.props.onSave(id);
  }

  handleEdit = () => {
    this.setState({
      status: 1,
    })
    this.props.history.push("/service-application")
  }

  handleCancelSave = () => {
    this.setState({
      status: 0,
    })
  }

  render() {
    const {
      handleEdit,
      handleSave,
      handleCancel,
    } = this.props;
    const {
      dataSource,
      status,
      isViewMore,
      numToShow,
    } = this.state;
    
    const detailsSlice = dataSource.details.slice(0, numToShow);
    const detailsRender = detailsSlice.map(item => {
      return <div className="item">{item}</div>
    })
    return (
    <section className="package-card">
      <div className="package-header">
        <div className={`${dataSource.status.toLowerCase()}`}>
          <span className="rank">{dataSource.myRank}</span><span className="status">{dataSource.status.toUpperCase()}</span>
        </div>
      </div>
      <div className="package-body">
      <div className="package-info">
        <div className="location">
          <span className="title">Location:</span> {dataSource.location}
        </div>
        
        <div className="name">
          <span className="title">Package Name: </span>
          {dataSource.packageName}
        </div>

        <div className="price">
        <span className="title">
          Package Price: {' '} 
        </span> 
          Php {dataSource.packagePrice}
        </div>
        
        <div className="service">
        <span className="title">
          Service: 
        </span>
          {dataSource.service}
        </div>

        <div className="type spacer">
          <span className="title">
          Type: {' '}
          </span>
          {dataSource.type}
        </div>
        
        <div className="type spacer">
          <span className="title">
          Least Bid: {' '}
          </span>
          {dataSource.leastBid}
        </div>
        <div className="type spacer">
          <span className="title">
          Bidding End: {' '}
          </span>
          {dataSource.biddingEnd}
        </div>
        
        <div className="details">
          <span className="title">Package Details: </span> 
          <div className="items">
            {detailsRender}
          </div>
          {dataSource.details.length > 4 &&
          <button
            className="view-more-action"
            onClick={this.handleViewMore}
          >
            View {isViewMore ? 'Less' : 'More'}
          </button>
          }
        </div>
      </div>
      </div>
      <div className="package-footer">

        <div className="action-body">
          <span className="action">
            {dataSource.status === 'Bidding' &&
            <Button
            type="primary"
            className="action-edit"
            onClick={this.handleEdit}
            >
              Bid
            </Button>
            }
            {dataSource.status === 'For Deployment' &&
            <Button
            type="primary"
            className="action-edit"
            onClick={this.handleEdit}
            >
              Accomplised
            </Button>
            }
            <div className="mybid-section">
            <span className="myBid">
            My Bid: {' '}
            </span>
            {dataSource.myBid}
            </div>
          </span>
        </div> 
        }
        {/* {this.props.dataSource.status === 'Bidding' && 
          <div className="bidding-section">
            Bidders Rank:
          {this.props.dataSource.bidders.map(items => (
            <div>
            <span>{items.rank}</span>
            <span>{items.orgName}</span>
            <span>{items.bidAmount}</span>
            </div>
          ))}
        </div> 
        } */}
          {/* {this.props.dataSource.status === 'For Deployment' && 
          <div className="deployment-section">
            <p>Assigned to:</p>
            <p>{this.props.dataSource.bidderAssigned}</p>
          </div>
          }
          {this.props.dataSource.status === 'Accomplished' && 
          <div className="deployment-section">
            <p>Assigned to:</p>
            <p>{this.props.dataSource.bidderAssigned}</p>
            <p>Accomplised Date:</p>
            <p>{this.props.dataSource.accomplishDate}</p>
          </div>
          } */}
        </div> 
    </section>
    )
  }
}

PackageCard.propTypes = propTypes;
PackageCard.defaultProps = defaultProps;

export default withRouter(PackageCard);