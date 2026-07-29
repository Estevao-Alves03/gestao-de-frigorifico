import {create} from "zustand"

type Category = {
    id: number;
    name: string;
}

type CategoryStore = {
    categories: Category[]
    addCategory: (category: Category) => void;
    removeCategory: (id: number) => void;
}



export const useCategoryStore = create<CategoryStore>((set) => ({
    categories: [],

    // adcionando categoria
   addCategory: (category) => 
    set((state) => ({
        categories: [...state.categories, category]
    })),
    // remover categoria
    removeCategory: (id) => 
        set((state) => ({
            categories: state.categories.filter(
                (category) => category.id !== id
            )
    }))
}))