const name1 = document.getElementById('name');
const phone = document.getElementById('phone');
const form = document.getElementById('form');
const lastname = document.getElementById('lastName');
const town = document.getElementById('town1')
const region = document.getElementById('region')
const errorElement = document.getElementById('error')


form.addEventListener('submit', (e) => {
    let messages = []
    if (name1.value === '' || name1.value == null) {
        messages.push('❌Name is required')
    }
    if (phone.value === '' || phone.value == null){
        messages.push('❌Number is required')
    }
    if (lastname.value === '' || lastname.value == null) {
        messages.push('❌Last Name is required')
    }
    if (town.value === '' || town.value == null) {
        messages.push('❌town is required')
    }
    if (region.value === '' || region.value == null) {
        messages.push('❌region is required')
    }
    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' ')
        console.log(errorElement)
    }
})
