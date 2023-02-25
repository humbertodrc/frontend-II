import { createSlice } from "@reduxjs/toolkit";

interface Notifications {
	status: "activas" | "inactivas";
	actions: "Desactivar notificaciones" | "Activar notificaciones";
	message: string;
}

const initialState: Notifications = {
	status: "activas",
	actions: "Desactivar notificaciones",
	message: "Se ha guardado la selecciòn de desactivar las notificaciones",
};

export const notificationsSlice = createSlice({
	name: "notifications",
	initialState,
	reducers: {
		active: (state) => {
			state.status = "activas";
			state.actions = "Desactivar notificaciones";
			state.message =
				"Se ha guardado la selecciòn de desactivar las notificaciones";
		},
		inactive: (state) => {
			state.status = "inactivas";
			state.actions = "Activar notificaciones";
			state.message =
				"Se ha guardado la selecciòn de activar las notificaciones";
		},
	},
});

export const {active, inactive} = notificationsSlice.actions;

export default notificationsSlice;
