import {
  Box,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React, {
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Page } from "../../../components";
import createFastContext from "../../../context/FastContext";
import { useRenderCheck } from "./RenderHighlight";

const initialValue = {
  firstName: "",
  lastName: "",
};

const { Provider: FastProvider, useStore } = createFastContext(initialValue);
const ReactContext = createContext({
  state: initialValue,
  onUpdate: (update: Partial<typeof initialValue>) => {},
});

const Provider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(initialValue);
  const onUpdate = useCallback((update: Partial<typeof initialValue>) => {
    setState((cur) => ({ ...cur, ...update }));
  }, []);
  const value = useMemo(
    () => ({
      state,
      onUpdate,
    }),
    [onUpdate, state]
  );
  return (
    <ReactContext.Provider value={value}>{children}</ReactContext.Provider>
  );
};

const Field: FunctionComponent<{
  storeKey: keyof typeof initialValue;
  isFast: boolean;
}> = ({ storeKey, isFast }) => {
  const check = useRenderCheck();
  const [value, setValue] = useStore((store) => store[storeKey]);
  const { state, onUpdate } = useContext(ReactContext);
  const onChange = useCallback(
    (event: any) => {
      const callback = isFast ? setValue : onUpdate;
      callback({ [storeKey]: event.target.value as string });
    },
    [isFast, onUpdate, setValue, storeKey]
  );
  return (
    <TextField
      value={isFast ? value : state[storeKey]}
      onChange={onChange}
      label={storeKey}
      {...check}
    />
  );
};

const DisplayField: FunctionComponent<{
  storeKey: keyof typeof initialValue;
  isFast: boolean;
}> = ({ storeKey, isFast }) => {
  const check = useRenderCheck();
  const [value] = useStore((store) => store[storeKey]);
  const { state } = useContext(ReactContext);
  return (
    <Typography variant="h6" {...check}>
      {(isFast ? value : state[storeKey]) || "None"}
    </Typography>
  );
};

export const Context: FunctionComponent = () => {
  const [isFast, setFast] = useState(true);
  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setFast(e.target.checked);
  }, []);

  return (
    <Page title="Context">
      <Provider>
        <FastProvider>
          <Box display="flex" flexDirection="column" gap="1rem">
            <Typography variant="h6">
              Fast Context vs Regular Context
            </Typography>
            <FormGroup>
              <FormControlLabel
                control={<Switch checked={isFast} onChange={onChange} />}
                label="Fast Context"
              />
            </FormGroup>
            <Typography variant="subtitle1">Form</Typography>
            <Field storeKey="firstName" isFast={isFast} />
            <Field storeKey="lastName" isFast={isFast} />
            <Typography variant="subtitle1">Results</Typography>
            <DisplayField storeKey="firstName" isFast={isFast} />
            <DisplayField storeKey="lastName" isFast={isFast} />
          </Box>
        </FastProvider>
      </Provider>
    </Page>
  );
};

Context.displayName = "Context";
