import {type} from 'arktype'

const CareerForm = type({
    name:"string",
    email:"string",
    phone:"string"
})

export type CareerForm = typeof CareerForm