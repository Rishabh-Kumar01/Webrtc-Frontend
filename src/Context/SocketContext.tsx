import SocketIoClient from "socket.io-client";
import { createContext } from "react";

const WS_SERVER = "http://localhost:3000";

const SocketContext = createContext<any | null>(null);

const socket = SocketIoClient(WS_SERVER);

interface Props {
  children: React.ReactNode;
}

export const SocketProvider: React.FC<Props> = ({ children }: Props) => {
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
