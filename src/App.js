import React, { Component } from 'react';
import Section from './Section';
import './App.css';

// let sections = [
//   {
//     header: "Colors",
//     content: `
//     <p class="flow-text">
//       The primary colors, Green and Gold, should be the main colors used for headers and footers. The other colors in the can be used as accent colors for floating action buttons, call to action buttons, call to action banners, or content that you want to emphasize. Keep in mind that overuse of accent colors will diminish their ability to draw attention to a specific area of the page.
//     </p>
//      `,
//     code: `
//       $fus-yellow:     #ffc658;
//       $fus-light-blue: #8e9fbc;
//       $fus-dark-blue:  #1f2a44;
//       $fus-green:      #21412a;
//       $fus-gold:       #998643;
//       `
//   },
//   {
//     header: "Header 2",
//     content: "<h1>h1</h1>",
//     code: `
//       $fus-yellow:     #ffc658;
//
//       $fus-gold:       #998643;
//       `
//   },
//   {
//     header: "Header 3",
//     content: "Content 3",
//     code: `
//       $fus-yellow:     #ffc658;
//       $fus-light-blue: #8e9fbc;
//       $fus-dark-blue:  #1f2a44;
//       $fus-green:      #21412a;
//       $fus-gold:       #998643;
//       `
//   }
// ];
class App extends Component {

  constructor(props) {
		super(props);
		this.state = {sections: [
      {
        title: {
          rendered: "Intro"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            The Franciscan University of Steubenville Style Guide is a resource for web design and development. The framework and code samples allow developers to quickly construct a site that will maintain branding standards and fit in well with current University websites.
          </p>
          <p class="flow-text">
            This is a living style guide. It will be continually updated to fix bugs and keep our online brand in line with current design standards.
          </p>
           `
         },
        code: ``
      },
      {
        title: {
          rendered: "Colors"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            The primary colors, Green and Gold, should be the main colors used for headers and footers. The other colors in the can be used as accent colors for floating action buttons, call to action buttons, call to action banners, or content that you want to emphasize. Keep in mind that overuse of accent colors will diminish their ability to draw attention to a specific area of the page.
          </p>
           `
         },
        code: `
          $fus-yellow:     #ffc658;
          $fus-light-blue: #8e9fbc;
          $fus-dark-blue:  #1f2a44;
          $fus-green:      #21412a;
          $fus-gold:       #998643;
          `
      },
      {
        title: {
          rendered: "Colors"
        },
        content:  {

          rendered:
          `
          <p class="flow-text">
            The primary colors, Green and Gold, should be the main colors used for headers and footers. The other colors in the can be used as accent colors for floating action buttons, call to action buttons, call to action banners, or content that you want to emphasize. Keep in mind that overuse of accent colors will diminish their ability to draw attention to a specific area of the page.
          </p>
           `
         },
        code: `
          $fus-yellow:     #ffc658;
          $fus-light-blue: #8e9fbc;
          $fus-dark-blue:  #1f2a44;
          $fus-green:      #21412a;
          $fus-gold:       #998643;
          `
      },
    ]};
	}

// This get data from an api
  // componentDidMount() {
  //
  //   let myInit = {
  //     method: "GET"
  //   };
  // Url of the api endpoint
  // let url = "";
  //
  //   fetch(url, myInit).then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     this.state.sections = data;
  //     this.setState(this.state);
  //   });
  // }


  render() {
    return (
      <div className="row">
        <div className="col s12 m9 l10">
          {this.state.sections.map(function(section, i){
            return <Section header={section.title.rendered} content={section.content.rendered} key={i} code={section.code}/>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
