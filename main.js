class Component{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Order {
    constructor() {
        this.components = [];
    }

    addComponent(component, quantity){
        this.components.push({component, quantity});
        console.log(`Додано ${quantity} деталі(ей) ' ${component.name} ' до замовлення`);
    }
    
    calculateTotal(){
        let total = 0;
        this.components.forEach(item =>{
            total += item.component.price * item.quantity;
        });
        return total;
    }

    printOrderDetails(){
        if(this.components.length === 0){
            console.log("Замовлення порожнє");
            return;
        }

        console.log("Деталі замовлення:");
        this.components.forEach(item => {
            console.log(`${item.quantity} деталі(ей) "${item.component.name}" - $${(item.component.price * item.quantity).toFixed(2)}`);
        });

        console.log(`Загальна сума замовлення: $${this.calculateTotal().toFixed(2)}`);
    }
}

const timingBelt = new Component ('timingBelt', 50);
const olinolLubricant = new Component ('olinolLubricant', 20);

const order = new Order();

order.addComponent(timingBelt, 2);
order.addComponent(olinolLubricant, 3);

order.printOrderDetails();