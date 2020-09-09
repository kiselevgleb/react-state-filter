import React, { useState } from 'react'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio(props) {

  const [selected, setState] = useState("All");
  let list = [{
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png",
    category: "Flayers"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg",
    category: "Business Cards"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg",
    category: "Websites"
  }, {
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png",
    category: "Flayers"
  }];
  let masFirst = [];
  let masSecond = [];
  let masThird = [];

  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    if (index < 6) {
      masFirst.push(element);
    } else if (index > 5 && index < 11) {
      masSecond.push(element);
    } else if (index > 10) {
      masThird.push(element);
    }
  }
  const [masFirstState, setFirst] = useState(masFirst);
  const [masSecondState, setSecond] = useState(masSecond);
  const [masThirdState, setThird] = useState(masThird);

  const onSelectFilter = (e) => {
    console.log(e.currentTarget.getAttribute("select"))
    console.log(selected)
    setState(e.currentTarget.getAttribute("select"));
    if (e.currentTarget.getAttribute("select") !== "All") {
      masFirst = masFirst.filter(o => o.category === e.currentTarget.getAttribute("select"));
      masSecond = masSecond.filter(o => o.category === e.currentTarget.getAttribute("select"));
      masThird = masThird.filter(o => o.category === e.currentTarget.getAttribute("select"));
    }
    setFirst(masFirst);
    setSecond(masSecond);
    setThird(masThird);
  }

  return (
    <div>
      <Toolbar
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(e) => onSelectFilter(e)}
      />
      <ProjectList masF={masFirstState} masS={masSecondState} masT={masThirdState} /></div>
  );
}
export default Portfolio;