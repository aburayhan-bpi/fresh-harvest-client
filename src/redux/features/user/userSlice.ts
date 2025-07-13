// import type { RootState } from "@/redux/store";

// import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
// import type { IUser } from "Type";

// interface InitialState {
//   users: IUser[];
// }

// const initialState: InitialState = {
// //   users: [
// //     {
// //       name: "Rayhan",
// //     },
// //     {
// //       name: "Tarek",
// //     },
// //   ],
// };

// type DraftUser = Pick<IUser, "name">;

// const createUser = (userInfo: DraftUser): IUser => {
//   return { id: nanoid(), ...userInfo };
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState: initialState,
//   reducers: {
//     addUser: (state, action: PayloadAction<IUser>) => {
//       const userData = action.payload;
//       const userWithId = createUser(userData);
//       state.users.push(userWithId);
//     },
//     deleteUser: (state, action: PayloadAction<string>) => {
//       state.users = state.users.filter((user) => user?.id !== action.payload);
//     },
//   },
// });

// export const selectUsers = (state: RootState) => {
//   return state.user.users;
// };

// export const { addUser, deleteUser } = userSlice.actions;

// export default userSlice.reducer;
