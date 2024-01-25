import serial
import time
ser = serial.Serial('COM5',9600)
def encendido():
    ser.write(b'e')
def apagado():
    ser.write(b'a')
def cerrar():
    ser.write(b'c')
while True:
    cont = input("presiona una tecla")
    if(cont=="c"):
        cerrar()
        break
    elif(cont=="e"):
        encendido()
    elif(cont=="a"):
        apagado()

