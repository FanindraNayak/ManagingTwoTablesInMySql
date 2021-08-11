import create from "zustand";

const useStore = create((set) => ({
	nameOfDb: "Select a database",
	setDbName: (name) => set((state) => ({ nameOfDb: name })),
	databaseUsing: "filminfo",
	setDatabaseUsing: (name) => set((state) => ({ databaseUsing: name })),
}));

const useData = create((set) => ({
	data: [],
	setData: (dataGot) => set((state) => ({ data: dataGot })),
}));

export { useStore, useData };
