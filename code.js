const remained = document.getElementById("remained")
const liters = document.getElementById("liters")
const percentage = document.getElementById("percentage")
const cups = document.querySelectorAll(".cup.cup-small")
const unit = 12.5
const remainedUnit = 0.25

cups.forEach((cup, index) => {
  cup.addEventListener("click", () => {
    // let isEmpty = false

    cups.forEach((cupItem, cupIndex) => {
      if (cupIndex < index){
        cupItem.classList.add("colored")
      }
      else if(cupIndex === index) {
        if(cupItem.classList.contains("colored")) {
          cupItem.classList.remove("colored")
          // if(index == 0) {
          //   isEmpty = true
          // }
        } else {
          cupItem.classList.add("colored")
        }
      }
      else {
        cupItem.classList.remove("colored")
      }
    })

    const coloredCups = document.querySelectorAll(".cup.cup-small.colored")
    const isEmpty = coloredCups.length === 0

    let result = (index + 1) * unit
    if(isEmpty) {
      result = 0
    }
    percentage.innerText = `${result}%`
    percentage.style.height = `${result}%`

    let remainedResult = 2 - (remainedUnit * (index + 1))
    if(isEmpty) {
      remainedResult = 2
    }
    liters.innerText = `${remainedResult}L`
  })
})
// 2 - (0.25 * (index + 1))
// [ 0, 1, 2, 3, 4, 5, 6, 7]