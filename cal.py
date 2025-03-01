from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

def calculate(expression):
    try:
        result = eval(expression)  # Evaluates the mathematical expression
        return result
    except:
        return "Error"

@app.route("/")
def index():
    return render_template("index.html")  # Load the calculator UI

@app.route("/calculate", methods=["POST"])
def calculate_route():
    data = request.get_json()
    expression = data.get("expression", "")
    result = calculate(expression)
    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(debug=True)
