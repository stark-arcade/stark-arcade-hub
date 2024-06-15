import useSessionStorage from "@/hooks/useSessionStorage";
import { useToast } from "@chakra-ui/react";
import { useAccount, useConnect } from "@starknet-react/core";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
} from "react";
import { disconnect } from "starknetkit";
interface IWalletConnectionProps {
  connectWallet: (index: number) => void;
  disconnectWallet: () => void;
  address?: string;
  chain_id?: number;
}
const initalValue: IWalletConnectionProps = {
  connectWallet: () => {},
  disconnectWallet: () => {},
  address: "",
  chain_id: 0,
};
interface Configuration {
  address?: string;
  chain_id?: number;
}
export const WalletContext = createContext<IWalletConnectionProps>(initalValue);
const APP_NAME = "stark_arcade_hub";
const ProviderWalletContext = ({ children }: PropsWithChildren) => {
  const { address: addressWallet, status: statusWallet } = useAccount();
  const [config, setConfig] = useSessionStorage<Configuration>(APP_NAME, {
    address: undefined,
    chain_id: undefined,
  });
  const [address, setAddress] = React.useState(config.address);
  const [chain_id, setChainId] = React.useState(config.chain_id);

  const { connect, connectors } = useConnect();

  const toast = useToast();

  const disconnectWallet = async () => {
    setConfig({ address: undefined, chain_id: undefined });
    setAddress(undefined);
    await disconnect({ clearLastWallet: true });
    setChainId(undefined);
  };
  /// Custom
  const connectWallet = async (index: number) => {
    try {
      connect({ connector: connectors[index] });
      setChainId(index);
    } catch (error) {
      toast({
        title: "Reject Connect",
        description: "You Reject to connect",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      disconnectWallet();
    }
  };

  useEffect(() => {
    if (addressWallet && addressWallet !== address && chain_id != undefined) {
      setAddress(addressWallet);
      setConfig({ ...config, address: addressWallet, chain_id: chain_id });
    }
  }, [addressWallet, chain_id]);
  useEffect(() => {
    const handleReConenct = async () => {
      if (address && statusWallet === "disconnected" && chain_id != undefined) {
        connect({ connector: connectors[chain_id] });
      }
    };
    handleReConenct();
  }, []);

  return (
    <WalletContext.Provider
      value={{ address, chain_id, connectWallet, disconnectWallet }}
    >
      {children}
    </WalletContext.Provider>
  );
};
export const useWalletContext = () => {
  const context = useContext(WalletContext);

  if (!context) {
    throw new Error(
      "useWalletContext must be used within a ProviderWalletContext"
    );
  }
  return context;
};
export default ProviderWalletContext;
