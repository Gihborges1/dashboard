<template>
  <v-row class="mt-10" justify="center">
      <div id="chart1" style="width: 800px;">
        <apexchart type="bar" height="450" :options="chartOptions1" :series="series1"></apexchart>
      </div>

      <div id="chart" style="width: 800px;">
        <apexchart type="radar" height="450" :options="chartOptions" :series="series"></apexchart>
      </div>
    </v-row>
</template>


<script>
export default {
  name: "Fatimagrafico",

  data: () => ({
    series: [
        {
          name: 'Fátima',
          data: [8.8, 7.8, 5.6, 9.4, 8.8, 8.4],
        }, 
        {
          name: 'Geral',
          data: [8.25, 7.7, 6.8, 8.6, 8.225, 8.7],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radar',
          dropShadow: { enabled: true, blur: 1, left: 1, top: 1 }
        },
        title: { text: '' },
        stroke: { width: 2 },
        fill: { opacity: 0.1 },
        markers: { size: 0 },
        xaxis: { categories: ['LI', 'NE', 'VC', 'RE', 'IC', 'TE'], },
        yaxis: {
          min: 0,
          max: 10
        }
      },


      series1: [{
        data: [8.25, 7.7, 6.8, 8.6, 8.225, 8.7]
      }],

      chartOptions1: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function(chart, w, e) {
              // console.log(chart, w, e)
            }
          }
        },
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        legend: {
          show: false
        },
        xaxis: {
          categories: [ 'LI', 'NE', 'VC', 'RE', 'IC', 'TE' ],
          labels: {
            style: {
              fontSize: '12px'
            }
          }
        },
        yaxis: {
          min: 0,
          max: 10
        }
      },  
  })

}
</script>


<style>

</style>
