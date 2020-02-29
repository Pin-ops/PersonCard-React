import React, {Component} from 'react';
import './App.css';
import PersonCard from './PersonCard/PersonCard'

// class based olmasi icin {Component} extend edilmek zorunda.
class App extends Component {

// Constructor part
// render a kadar state ve handler functionlar yazilir
state = {
  persons: [
    {name:'Yavuz',age:35} ,
    {name:'Ridvan', age:33},
    {name:'Atike', age:20},
    {name:'Numeric', age:20}
  ]
}
personCardOnClickHandler=(component)=>{
  console.log(component +  'clicked!')
}
// render is also constructor but it refresh itself with every update

render(){
  // Component burda olusturulur.
  // Map ile istedigimiz kadar component olusturabiliriz.
  // anlik degisebilecek bilgiler buraya yazilir

  let personOutput= this.state.persons.map((item,i)=>
  <PersonCard
  key={i}
  name={item.name}
  age={item.age}
  // click bir props
  // function i  cagirmayip direk component icerisine atiyoruz
  click = {() => this.personCardOnClickHandler('PersonCard')}
  />
  );

  // console.log(personOutput)
  // personOutput.push(<button
  //   key="button"
  //   onClick = {this.personCardOnClickHandler.bind(this,'button')}>
  //   Click ME
  //   </button>)

  return(
    // render da olusturulan variable i buraya yazip görünür hale getiriyoruz.

      <div className="App">
          {personOutput}
          <button onClick = {this.personCardOnClickHandler.bind(this,'button')}>Click ME </button>
      </div>

  )

}
}

export default App;