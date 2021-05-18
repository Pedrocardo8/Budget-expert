import React, { useState }  from 'react';
import {Container, Row, Col, Button} from "react-bootstrap";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import Top from '../components/TopRow/Top';
import LastAddedTable from '../components/LastAdded/LastAddedTable';
import Add from '../components/Add/Add';
import AddCategory from '../components/Add/AddCategory';
import { useAuth } from "../context/AuthContext";
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import Chart from "react-google-charts"



function Dashboard() { 
    const [income, setIncome] = useState(0)
    const [data, setData] = useState([
      {
        week: "Week 1",
        income: income,
        expense: 2400,
        total: 2400
      },
      {
        week: "Week 2",
        income: 3000,
        expense: 1398,
        total: 2210
      },
      {
        week: "Week 3",
        income: 2000,
        expense: 9800,
        total: 2290
      },
      {
          week: "Week 4",
          income: 2000,
          expense: 9800,
          total: 2290
        },
    ]);

    
  return ( 
        <div className='dash'>
            <Container>
                <Top />
                <br/>
                <Row md={2} >
                   <Col >
                   <LineChart 
                    width={550}
                    height={350}
                    data={data}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="week" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="income"
                        stroke="#2ecc71"
                        activeDot={{ r: 8 }}

                    />
                    <Line 
                        type="monotone" 
                        dataKey="expense" 
                        stroke="#c0392b"
                    />
                </LineChart>
                </Col>
                <Col>
                <Chart
                        width={'650px'}
                        height={'400px'}
                        align={'center'}
                        chartType="PieChart"
                        loader={<div>Loading Chart</div>}
                        data={[
                            ['Task', 'Hours per Day'],
                            ['Food', 300],
                            ['House', 110],
                            ['Car', 30],
                            ['Shopping', 150],
                        ]}
                        options={{
                            title: 'Daily Transactions',
                            fontSize: '20',
                            responsive: true,
                            titleTextStyle: { color: '#000' },
                            legendTextStyle: { color: '#000' },
                            maintainAspectRatio: false,
                            //backgroundColor:"#0a2963"
                        }}
                        rootProps={{ 'data-testid': '1' }}
                      />  
                </Col>       
                </Row>
                <Row>
                   <LastAddedTable/>
                    <Col>
                        <Add/>
                        <AddCategory/>
                    </Col>
                </Row>
                
            </Container>
        </div>
    )
}

export default Dashboard;