const formatCurrency = (n) => {

  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 2,
  }).format(n)
}
console.log('formatCurrency: ', formatCurrency(8989888888888888));
const navigationLinlks = document.querySelectorAll('.navigation__link')
const calcElems = document.querySelectorAll('.calc')
for (let i = 0; i < navigationLinlks.length; i++) {
  navigationLinlks[i].addEventListener('click', (e) => {
    e.preventDefault()
    for (let j = 0; j < calcElems.length; j++) {
      if (navigationLinlks[i].dataset.tax === calcElems[j].dataset.tax) {
        calcElems[j].classList.add('calc_active')
        navigationLinlks[i].classList.add('navigation__link_active')
      } else {
        calcElems[j].classList.remove('calc_active')
        navigationLinlks[j].classList.remove('navigation__link_active')
      }
    }
  })
}

const ausn = document.querySelector('.ausn')
const formAusn = ausn.querySelector('.calc__form')
const resultTaxTotal = ausn.querySelector('.result__tax_total')
const calcLabelExpenses = ausn.querySelector('.calc__label_expenses')

calcLabelExpenses.style.display = 'none'
formAusn.addEventListener('input', () => {

  if (formAusn.type.value === 'income') {
    calcLabelExpenses.style.display = 'none'
    resultTaxTotal.textContent = formAusn.income.value * 0.08
    resultTaxTotal.textContent = ''
  }
  if (formAusn.type.value === 'expenses') {
    calcLabelExpenses.style.display = 'block'
    resultTaxTotal.textContent =
      (formAusn.income.value - formAusn.expenses.value) * 0.2;
  }
})




const selfEmployment = document.querySelector('.self-employment')
const formSelfEmployment = selfEmployment.querySelector('.calc__form')
const resultTaxSelfEmployment = selfEmployment.querySelector('.result__tax')


formSelfEmployment.addEventListener('input', () => {
  const resIndividual = formSelfEmployment.individual.value * 0.04
  const resEntity = formSelfEmployment.entity.value * 0.06
  resultTaxSelfEmployment.textContent = resIndividual + resEntity
})