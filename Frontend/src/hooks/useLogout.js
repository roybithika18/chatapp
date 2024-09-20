import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		try {
			const res = await fetch("http://localhost:5000/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				credentials: "include", // Ensure cookies are included in the request
			});
			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			// Clear local storage and user context
			localStorage.removeItem("chat-user");
			setAuthUser(null);

			toast.success("Logout successful");
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};

export default useLogout;
