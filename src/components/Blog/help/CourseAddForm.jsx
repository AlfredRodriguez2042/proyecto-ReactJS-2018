import React from 'react'
//import uid from 'uid'
import Calendar from './Calendar'
import MultiSelect from './MultiSelect'
import { categories, cocineros } from '../../data'
//import 'pure-css/lib/forms.css'
//import 'pure-css/lib/buttons.css'
import './course-add-form.css'

const optionsCocineros = cocineros.map( cocinero => Object.assign( {}, { label: cocinero, value: cocinero } ) )
const optionsCategories = categories.map( cat => Object.assign( {}, { label: cat, value: cat } ) )

const CourseAddForm = props => (
  <form className="pure-form  AddForm" onSubmit={props.onAddCourse}>
    {/* <input type="hidden" name="id" value={uid(10)} /> */}
    <input type="text" placeholder="Nombre " name="name" />
    <input type="url" placeholder="preparacion" name="poster" />
    <input type="url" placeholder="tipo" name="url" />
    <input type="number" placeholder="costo" name="amount" />
    <MultiSelect
      name="cocinero"
      placeholder="Elige lo q buscas"
      options={optionsCocineros}
    />
    <MultiSelect
      name="categories"
      placeholder="Elige la categoria"
      options={optionsCategories}
    />
    <Calendar name="date" />
    <input className="pure-button pure-button-primary" type="submit" value="Guardar" />
  </form>
)

export default CourseAddForm