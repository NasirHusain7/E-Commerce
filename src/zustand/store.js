import create from 'zustand';

// Utility function to save cart items to local storage
const saveToLocalStorage = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
};

// Utility function to load cart items from local storage
const loadFromLocalStorage = () => {
    const storedItems = localStorage.getItem('cartItems');
    return storedItems ? JSON.parse(storedItems) : [];
};

const useCartStore = create((set) => ({
    items: loadFromLocalStorage(),
    addItem: (newItem) => set((state) => {
        const itemIndex = state.items.findIndex(item => item.id === newItem.id);
        let updatedItems;
        if (itemIndex > -1) {
            updatedItems = state.items.map((item, index) => 
                index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
            );
        } else {
            updatedItems = [...state.items, { ...newItem, quantity: 1 }];
        }
        saveToLocalStorage(updatedItems);
        return { items: updatedItems };
    }),
    clearCart: () => set(() => {
        saveToLocalStorage([]);
        return { items: [] };
    }),
    updateItemQuantity: (id, quantity) => set((state) => {
        const updatedItems = state.items.map(item =>
            item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
        );
        saveToLocalStorage(updatedItems);
        return { items: updatedItems };
    }),
    removeItem: (id) => set((state) => {
        const updatedItems = state.items.filter(item => item.id !== id);
        saveToLocalStorage(updatedItems);
        return { items: updatedItems };
    })
}));

export default useCartStore;
