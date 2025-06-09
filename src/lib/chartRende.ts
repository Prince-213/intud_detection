//importing chartjs from node_modules
import { Chart } from 'chart.js/auto';
//here we are exporting const variable, which is an arrow function, 
//and the arrow function takes one argument called node
export const chartRender = (node: any, options: any) => {
    console.log('Action')
    console.log(node)
    console.log(options)

    new Chart (node, options)
}