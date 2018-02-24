// - kategória (required)
// - name (required)
// - amount (required)
// - date added (auto generated)
// - extra info (type: string, optional)
// - username (optional, ez esetleg egy későbbi feature-hez, de esetleg itt be lehetne rakni opcionálisan már)
// - typeRecurring (type: boolean, optional)
// - ja hogy legyen egy preset mondjuk gomb formájában a
//   typeRecurring: true-s tételekre és akkor, ha arra nyomsz az
//   kitöltse a legutóbbi alapján, de persze elküldés előtt tudd módosítani?

const initalState = [
    {
        id: 1,
        type: "expense",
        category: "food",
        title: "Pizza from Pizza Forte",
        amount: 2820,
        currency: "HUF",
        dateAdded: "2018.02.24. 23:17",
        extraInfo: "Lorem ipsum blabla nice little extra text info here",
        userName: "Roy",
        isRecurring: false
    },
    {
        id: 2,
        type: "expense",
        category: "travel",
        title: "Monthly pass",
        amount: 7650,
        currency: "HUF",
        dateAdded: "2018.02.24. 22:12",
        extraInfo: "",
        userName: "Roy's Mom",
        isRecurring: true
    },
    {
        id: 3,
        type: "income",
        category: "wage",
        title: "Monthly wage",
        amount: 266000,
        currency: "HUF",
        dateAdded: "2018.02.10. 10:00",
        extraInfo: "yay",
        userName: "Roy",
        isRecurring: true
    }
]

const items = (state = initalState) => {
    return state;
}
   
export default items;