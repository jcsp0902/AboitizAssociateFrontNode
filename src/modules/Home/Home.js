import React, { Component, Fragment } from 'react'
import { dataSource , packages } from './dataSource';
import isEqual from 'lodash/isEqual';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import Modal from 'antd/lib/modal';
import PackageCard from '../../components/PackageCard';


class Home extends Component {
  state = {
    dataSource: [],
    isShowModal: false,
    amount: "",
  }

  componentDidMount() {
    this.setState({
      dataSource,
    })
  }
  handleEdit = () => {
    this.setState({
      testData:  {
        id: 1,
        applicationId: 1,
        packageName: 'A',
        status: "Bidding",
        location: "Blk 10 Lot 18 Taas, Pulilan, Bulacan",
        packagePrice: 10000,
        bidderAssigned: "Maridin Association",
        accomplishDate: "March 2, 1996",
        service: "Installation",
        type: "Service",
        details:[
          "2 Lights",
          "5 Outlet",
          "4 Wirings",
        ]
      },
    })
  }

  handleSave = id => {
    this.setState({
      isShowModal: true,
      activeId: id,
    })
  }

  handleClose = () => {
    this.setState({
      isShowModal: false,
    })
  }

  handleCancel = () => {
    this.setState({
      isShowModal: false,
      activeId: "",
    })
  }

  handleChangeAmount = e => {
    const value = e.target.value || 0;
    this.setState({
      amount: value,
    })
  }

  handleOk = () => {
    const datas = this.state.dataSource;
    const newDatas = datas.map(data => {
      if(data.applicationId === this.state.activeId) {
        if (this.state.amount < data.leastBid) {
          data.leastBid = this.state.amount;
          data.myRank = "1st";
        }
        data.myBid = this.state.amount;
      }
      return data;
    })

    this.setState({
      dataSource: newDatas,
      isShowModal: false,
      activeId: "",
      amount: "",
    })
  }

  handleCancel = id => {
    const datas = this.state.dataSource;
    const newDatas = datas.filter(item => !isEqual(item.applicationId, id))
    console.log('newDatas', newDatas)
    this.setState({
      dataSource: newDatas,
    })
  }

  render() {

    return (
      <section className="home-section">
      <div className="title-home">Applications</div>
        {this.state.dataSource.map(data => 
          <PackageCard dataSource={data} onEdit={this.handleSave} onCancel={this.handleCancel} />
        )}
        <Fragment>
        <Modal
        className="modal-amount"
        title="Place Bidding Price"
        visible={this.state.isShowModal}
        onOk={this.handleOk}
        onCancel={this.handleClose}
        >
        <Input className="bidding-input-change" onChange={this.handleChangeAmount} value={this.state.amount} />
        </Modal>
      </Fragment>
      </section>
    
    )
  }
}

export default Home;

// {dataSource.map(data => 
//   <PackageCard dataSource={data} />
// )}