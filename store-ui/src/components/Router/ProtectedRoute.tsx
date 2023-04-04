import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../services/hooks/AuthHooks"

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [user] = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }
  })

  return children;
}
