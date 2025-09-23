import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function PublicRoute({ children, redirectTo = "/checkin" }) {
	const user = useSelector((s) => s?.auth?.user || s?.user || null);
	const isAuthenticated = !!(user && (user.id || user.username));

	if (isAuthenticated) {
		return (
			<Navigate
				to={redirectTo}
				replace
			/>
		);
	}
	return children;
}
