import React from "react"
import ReactApexChart from "react-apexcharts"
import "./cards.css"
import TrendingUpIcon from "@mui/icons-material/TrendingUp"
import Common from "../../common/Common"

const Cards = () => {
  const data = {
    series: [100],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        foreColor: "grey",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["199"],
      colors: ["#ff5b5b"],
    },
  }

  const data1 = {
    series: [90],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
        foreColor: "grey",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "50%",
          },
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["189"],
      colors: ["#ff5b5b"],
    },
  }
  const data2 = {
    series: [80],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          //add it
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["89"],
      colors: ["#E9B251"],
    },
  }

  const data3 = {
    series: [80],
    options: {
      chart: {
        height: 150,
        type: "radialBar",
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "58%",
          },
          //add it
          dataLabels: {
            value: {
              show: false,
            },
          },
        },
      },
      labels: ["89"],
      colors: ["#E9B251"],
    },
  }

  const Progress = ({ done }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        ></div>
      </div>
    )
  }

  return (
    <>
      <section className='cards grid'>
        <div className='cardBox'>
          <Common title='Total Students' />
          <div className='circle'>
            <div className='row1'>
              <ReactApexChart options={data.options} series={data.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>199</h1>
              
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Eligible Students' />
          <div className='circle'>
          <div className='row'>
              <ReactApexChart options={data1.options} series={data1.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>189</h1>
            </div>
          </div>
          
        </div>
        <div className='cardBox'>
          <Common title='Boys' />
          <div className='circle'>
            <div className='row'>
              <ReactApexChart options={data2.options} series={data2.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>89</h1>
              
            </div>
          </div>
        </div>
        <div className='cardBox'>
          <Common title='Girls' />
          <div className='circle'>
          <div className='row1'>
              <ReactApexChart options={data3.options} series={data3.series} type='radialBar' height={150} />
            </div>
            <div className='title row'>
              <h1>89</h1>
              
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Cards
