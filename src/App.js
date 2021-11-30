import React from 'react'; //import react libraries
import './style.css'; //import stylesheet for css modifications
import {instance as MedicalTreatmentInstance} from './App.js'

//define 6 variabels using the const signal
//const is a signal that the variable won’t be reassigned.
//These variables are static
const treatId = '001';
const treatCourseId = '321';
const name = 'Lamotrigine';
const type = 'Anticonvulsant Medication';
const category = 'Neurological';
const startDate = '£35.99';

//define component called MedicalTreatment.js,
function MedicalTreatment(props) {
  //Props are arguments passed to the component
  return (
    <div>
        <p class="p1">Treatment Id:{treatId}</p>
        <p class="p1">Course Id: {treatCourseId}</p>
        <p class="p1">Name: {name} </p>
        <p class="p1">Type: {type}</p>
        <p class="p1">Category: {category} </p>
        <p class="p1">Start Date: {startDate}</p>
    </div>
  );
}

//the component then returns the prop values, which are passed from the defined variables
//to the component
export default function App() {
    return(  <MedicalTreatment/> 
  );
}