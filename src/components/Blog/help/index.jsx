import React, { Component, } from 'react'
import PropTypes from 'prop-types';
//import uid from 'uid'
import { categories, items, cocineros } from '../../data/'
//import CourseAddForm from './CourseAddForm'
import CoursesSearch from './CoursesSearch'
import PostList from './CoursesList';
import Post from './Course';

class Posts extends Component {
  constructor(...props) {
    super(...props)

    this.state = {
      items: items,
      cocineros: cocineros,
      categories: categories,
      filter: {
        name: '',
        teacher: '',
        categories: [],
        search: ''
      }
    }

    this.handleOnAddCourse = this.handleOnAddCourse.bind(this)
    this.handleOnSearch = this.handleOnSearch.bind(this)
    this.handleOnFilter = this.handleOnFilter.bind(this)
  }

  handleOnAddCourse(e) {
    //alert('Evento en React')
    e.preventDefault()

    let form = e.target,
      items = {
        id: (form.id.value) ? form.id.value : Post.defaultProps.id,
        name: (form.name.value) ? form.name.value : Post.defaultProps.name,
        poster: (form.poster.value) ? form.poster.value : Post.defaultProps.poster,
   
        amount: (form.amount.value) ? form.amount.value : Post.defaultProps.amount,
        teacher: (form.teacher.value) ? form.teacher.value : Post.defaultProps.teacher,
        date: form.date.value ? form.date.value : Post.defaultProps.date,
        categories: (form.categories.value) ? form.categories.value.split(',') : Post.defaultProps.categories
      }

    this.setState({
      items: this.state.items.concat([items])
    })

    form.reset()
  }

  handleOnSearch(e) {
    let newFilter = Object.assign( {}, this.state.filter, { [e.target.name]: [e.target.value] } )

    this.setState({
      filter: newFilter
    })

    console.log(newFilter)
  }

   handleOnFilter(filter, data) {
    let regex = new RegExp(filter.search, 'i')
   return data.filter(q => ( regex.test(q.name) || regex.test(q.cocinero) || regex.test(q.categories) ))
   }

  render() {
    if ( !this.state.items.length ) {
      return (
        <article className="Main-container">
          <p>No hay cost :(</p>
        </article>
      )
    } else {
      return(
        <article className="Main-container">
          
           {/* <CourseAddForm onAddCourse={this.handleOnAddCourse} />  */}
          <CoursesSearch onSearch={this.handleOnSearch} />
            <PostList posts={this.handleOnFilter(this.state.filter, this.state.items)} /> 
          {/* <PostList posts={this.state.items}/>  */}
        </article>
      )
    }
  }
}

Post.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,

  amount: PropTypes.number.isRequired,
  teacher: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired
}

Post.defaultProps = {
  //id: uid(10),
  name: ' Desconocido',
  poster: ' agrega una receta',
  amount: 40,
  cocinero: ' none',
  date: 'Fecha No Definida',
  categories: ['Sin Categoría']
}

export default Posts