import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export function CriarAtividade() {
  const [open, setOpen] = useState(false);
  const [dataInicial, setDataInicial] = useState(null);
  const [dataFinal, setDataFinal] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div style={{ maxHeight: "50px", paddingTop: "15px" }}>
        <Button
          variant="contained"
          color="info"
          sx={{ borderRadius: "15px" }}
          size="large"
          onClick={handleClickOpen}
        >
          <AddIcon />
          Criar
        </Button>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Criar nova atividade</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Preencha os campos abaixo para criar uma nova atividade
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome"
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Descrição"
            type="text"
            fullWidth
            variant="standard"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Data Inicial"
              value={dataInicial}
              minDate={dayjs()}
              onChange={(newValue) => {
                setDataInicial(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          <span style={{ margin: "0 5px" }}></span>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DesktopDatePicker
              label="Data Final"
              value={dataFinal}
              minDate={dayjs()}
              onChange={(newValue) => {
                setDataFinal(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="info" onClick={handleClose}>
            Criar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
