import React, { Component } from 'react'
import { dataSource , packages } from './dataSource';
import isEqual from 'lodash/isEqual';
import Button from 'antd/lib/button';
import PackageCard from '../../components/PackageCard';


class Home extends Component {
  state = {
    dataSource: [],
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
    this.props.history.push("/service-application")    
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
        {dataSource.map(data => 
          <PackageCard dataSource={data} onSave={this.handleSave} onCancel={this.handleCancel} />
        )}
      </section>
    )
  }
}

export default Home;

// {dataSource.map(data => 
//   <PackageCard dataSource={data} />
// )}