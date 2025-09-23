import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children, redirectTo = "/login" }) {
	const user = useSelector((s) => s?.user?.user || s?.user || null);
	console.log(user);
	const isAuthenticated = !!(user && (user.id || user.username));

	if (!isAuthenticated) {
		return (
			<Navigate
				to={redirectTo}
				replace
			/>
		);
	}
	return children;
}
