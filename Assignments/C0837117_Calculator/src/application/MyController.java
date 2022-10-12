package application;

import java.util.Stack;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

public class MyController {
	@FXML Button btn0;
	@FXML Button btn1;
	@FXML Button btn2;
	@FXML Button btn3;
	@FXML Button btn4;
	@FXML Button btn5;
	@FXML Button btn6;
	@FXML Button btn7;
	@FXML Button btn8;
	@FXML Button btn9;
	@FXML Button btnPlusMinus;
	@FXML Button btnPercentage;
	@FXML Button btnMultiply;
	@FXML Button btnMinus;
	@FXML Button btnEquals;
	@FXML Button btnDivide;
	@FXML Button btnPlus;
	@FXML Button btnSqrt;
	@FXML Button btnClear;
	@FXML Button btnDot;
	
	@FXML TextField input;
	
	private boolean clearText = false;
	private boolean isChanged = false;
	private Stack<String> s = new Stack<String>();
	
	public void btnClick(ActionEvent event) {
		isChanged = true;
		Button btn = (Button) event.getSource();
		String inputText = input.getText().toString();
		if(btn == btnDot) {
			if(inputText.contains(".")) {
				return;
			}
		}
		else {
			if(inputText.contains(".") && inputText.split("\\.").length == 2 && !clearText) {
				return;
			}
		}
		if(clearText) {
			input.setText("");
			clearText = false;
		}
		input.setText(input.getText().toString() + btn.getText().toString());
	}
	
	public String plusMinus(String inputText) {
		String value = String.valueOf((Double.parseDouble(inputText) * -1));
		if(value.split("\\.")[1].equals("0")){
			value = value.split("\\.")[0];
		}
		return value;
	}
	
	public String percentage(String inputText) {
		return String.valueOf(Double.parseDouble(inputText)/100);
	}
	
	public String sqrt(String inputText) {
		return String.valueOf(String.format("%.1f", Math.sqrt(Double.parseDouble(inputText))));
	}
	
	public void calculate(Button btnClicked) {
		String value = "";
		double secondVal = Double.parseDouble(s.pop());
		String operator = s.pop();
		double firstVal = Double.parseDouble(s.pop());
		System.out.println(firstVal + " " + operator + " " + secondVal);
		if(operator.equals("+")) {
			value = String.valueOf(String.format("%.1f", firstVal+secondVal));
		}
		else if(operator.equals("-")) {
			value = String.valueOf(String.format("%.1f", firstVal-secondVal));
		}
		else if(operator.equals("/")) {
			value = String.valueOf(String.format("%.1f", firstVal/secondVal));
		}
		else if(operator.equals("X")) {
			value = String.valueOf(String.format("%.1f", firstVal*secondVal));
		}
		
		input.setText(value);
		s.push(value);
		if(btnClicked != btnEquals){
			s.push(btnClicked.getText());
		}
		clearText = true;
	}
	
	public void btnClear(ActionEvent event) {
		input.setText("");
		s.removeAllElements();
	}
	
	public void btnOperator(ActionEvent event) {
		String inputText = input.getText().toString();
		Button btnClicked = (Button) event.getSource();

		if(inputText.equals("")) {
			return;
		}
		else if(btnClicked == btnPlusMinus) {
			input.setText(plusMinus(inputText));
		}
		else if(btnClicked == btnPercentage) {
			input.setText(percentage(inputText));
			clearText = true;
		}
		else if(btnClicked == btnSqrt) {
			input.setText(sqrt(inputText));
			clearText = true;
		}
		else if (btnClicked == btnEquals && s.size() == 1) {
			clearText = false;
			return;
		}
		else if(btnClicked == btnEquals && s.size() == 2 && !clearText) {
			s.push(inputText);
			calculate(btnClicked);
		}
		else if (s.isEmpty()) {
			s.push(inputText);
			if(btnClicked != btnEquals) {
				s.push(btnClicked.getText());
				clearText = true;
			}
		}
		else if(s.size() == 1) {
			if(btnClicked != btnEquals)
				s.push(btnClicked.getText());
				clearText = true;
		}
		else if(s.size() == 2) {
			System.out.println("here");
			if(!isChanged) {
				s.pop();
				if(btnClicked != btnEquals) {
					s.push(btnClicked.getText());
				}
			}
			else {
				s.push(inputText);
				calculate(btnClicked);
			}
		}
		else if(s.size() == 3) {
			calculate(btnClicked);
		}
		isChanged = false;
		
		printStack();
	}
	
	public void printStack() {
		Stack<String> temp = new Stack<String>();
		while(!s.empty()) {
			temp.push(s.pop());
			System.out.println(temp.peek());
		}
		System.out.println("--------------");
		while(!temp.empty()) {
			s.push(temp.pop());
		}
	}
	
}
