import json

# Inicializar una lista vacía para almacenar los alimentos
base_de_datos_alimentos = []

# Función para agregar un nuevo alimento a la base de datos
def agregar_alimento(nombre, porcion_gramos, calorias):
    alimento = {
        "nombre": nombre,
        "porcion_gramos": porcion_gramos,
        "calorias": calorias
        # Puedes añadir más variables aquí si es necesario
    }
    base_de_datos_alimentos.append(alimento)
    guardar_base_de_datos()

# Función para consultar la base de datos
def consultar_base_de_datos():
    return base_de_datos_alimentos

# Función para guardar la base de datos en un archivo JSON
def guardar_base_de_datos():
    with open("base_de_datos_alimentos.json", "w") as archivo:
        json.dump(base_de_datos_alimentos, archivo)

# Función para cargar la base de datos desde un archivo JSON (si existe)
def cargar_base_de_datos():
    try:
        with open("base_de_datos_alimentos.json", "r") as archivo:
            base_de_datos_alimentos.extend(json.load(archivo))
    except FileNotFoundError:
        # Si el archivo no existe, no se cargan datos previos
        pass

# Cargar la base de datos al inicio del programa
cargar_base_de_datos()

# Ejemplo de uso:
# Agregar alimentos a la base de datos
#agregar_alimento("Manzana", 100, 52)
#agregar_alimento("Pollo a la parrilla", 150, 165)
#agregar_alimento("Arroz integral", 50, 110)



print("Ingrese el alimento, la porcion en gramos y las calorias por esa porcion: ")
agregar_alimento(nombre=input("ingrese el nombre: "),porcion_gramos=input("Ingrese la cantidad de la porcion en gramos: "), calorias=input("ingrese la cantidad de calorias: ")  )



# Consultar la base de datos
print(consultar_base_de_datos())