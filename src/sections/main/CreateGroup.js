import React from "react";
import * as Yup from "yup";
import Slide from "@mui/material/Slide";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Stack,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook_form/FormProvider";
import { RHFTextField } from "../../components/hook_form";
import RHFAutoCompleteField from "../../components/hook_form/RHFAutoCompleteField";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
///Form
const MEMBERS=[  "hello","tim","altman"]
// ... other options]
const CreateGroupForm = ({handleCloseBlock}) => {
  const NewGroupScheme = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    members: Yup.array().min(2, "Must have atleast Two Members!"),
  });
  const defaultValues = {
    title: "",
    members: [],
  };
  const methods = useForm({
    resolver: yupResolver(NewGroupScheme),
    defaultValues,
  });
  const {
    reset,
    watch,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful,isValid },
  } = methods;
  const onSubmit=async(data)=>{
    try{

    }
    catch(error){
      console.log(error);

    }
}
return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
           <RHFTextField name="title" label="Title"/>
           <RHFAutoCompleteField name="members" label={"Members"} multiple freeSole options={MEMBERS.map((option)=>option)} ChipProps={{size:"medium"}}/>
           <Stack spacing={2} direction={"row"} alignContent={"center"} justifyContent={"flex-end"}>
           <Button onClick={handleCloseBlock}>Cancel</Button>
            <Button type="submit" variant="contain">Create</Button>           
           </Stack>
        </Stack>
    </FormProvider>
)
};
const CreateGroup = ({ openBlock, handleClickOpenBlock, handleCloseBlock }) => {
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={openBlock}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleCloseBlock}
      sx={{ p: 4 }}
    >
      <DialogTitle>{"Create New Group"}</DialogTitle>
      <DialogContent>
        <CreateGroupForm handleCloseBlock={handleCloseBlock}/>
      </DialogContent>
    </Dialog>
  );
};

export default CreateGroup;
