import React, { Component } from 'react';
import WidgetComponent from "../../../components/Widget";
import MessagesComponent from "../../../components/Messages";
import StatComponent from "../../../components/Stat";
import ProgressListComponent from "../../../components/ProgressList";
import { Bar, Line, Doughnut, Pie, Radar } from 'react-chartjs-2';
import { authHeader } from "../../../helpers/auth-header";

class DashboardPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      summary: {
        income: {},
        visits: {},
        orders: {},
        new_accounts: {}
      },
      charts: {
        barChart: {},
        lineChart: {},
        doughnutChart: {},
        pieChart: {},
        radarChart: {}
      },
      sales: [],
      messages: []
    };
    this.requestOptions = {
      method: 'GET',
      headers: authHeader()
    };
  }

  componentWillMount() {
    // this.loadSummaryData();
    // this.loadChartsData();
    // this.loadSalesData();
    // this.loadMessagesData();
  }

  loadSummaryData() {
    fetch('http://127.0.0.1:3003/stats/summary', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let summary = response.data[0];
        this.setState({ summary })
      });
  }

  loadChartsData() {
    fetch('http://127.0.0.1:3003/stats/charts', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let charts = response.data[0];
        this.setState({ charts })
      });
  }

  loadSalesData() {
    fetch('http://127.0.0.1:3003/stats/sales', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let sales = response.data;
        this.setState({ sales })
      });
  }

  loadMessagesData() {
    fetch('http://127.0.0.1:3003/messages', this.requestOptions)
      .then(response => response.json())
      .then(response => {
        let messages = response.messages;
        this.setState({ messages })
      });
  }

  render() {
    return (
      <div className="container-fluid px-5 mt-5 mb-4">
        <div className="row">
          <div className="col-lg-3">
            <WidgetComponent header='Save New Data' className='shadow-01 widget-dark bg-success' moreLink='/save' excerpt='Please enter the items correctly !'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>
          <div className="col-lg-3">
            <WidgetComponent header='Add New School' className='shadow-01 widget-dark bg-danger' moreLink='/add' excerpt='Please enter a new school !'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>          </div>

          <div className="col-lg-3">
            <WidgetComponent header='Send Charts to Email' className='shadow-01 widget-dark bg-warning' moreLink='/send' excerpt='Please charts to Email !'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>
          <div className="col-lg-3">
            <WidgetComponent header='User-List' className='shadow-01 widget-dark bg-secondary' moreLink='/users' excerpt='Let me show you User-Lits !'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras consectetur mauris accumsan, tempus ex quis,
                tincidunt mauris. Duis rutrum lacus et ligula tempor euismod.
              </p>
            </WidgetComponent>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardPage;
