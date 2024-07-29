export type Guitar = {
    id: number
    image: string
    name: string
    description: string
    price: number
}

export type CartItem = Guitar & {
    quantity: number
}

//* export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & { //! pick para seleccionar los atributos de otro type
//*     quantity: number
//* }

//* export type CartItem = Omit<Guitar, 'description' | 'image'> & { //! pick para omitir los atributos de otro type
//*     quantity: number
//* }

