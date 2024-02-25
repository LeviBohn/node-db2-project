// STRETCH
const cars = [
    {
        vin: '4Y1SL65848Z411439',
        make: 'toyota',
        model: 'prius',
        mileage: '215000',
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '3Y1SL65848Z411439',
        make: 'toyota',
        model: 'corolla',
        mileage: '115000',
        title: 'salvage',

    },
    {
        vin: '2Y1SL65848Z411439',
        make: 'ford',
        model: 'focus',
        mileage: '15000',

    },
]

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}