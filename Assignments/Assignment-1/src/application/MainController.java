package application;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;
import javafx.scene.control.TextField;

public class MainController {
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
	
	Double firstNum = null;
	Double secondNum = null;
	Button operator;
	
	public void btnClick(ActionEvent event) {
		Button btnClicked = (Button)event.getSource();
		String inputStr = input.getText();
		if(btnClicked == btnDot) {
			if(inputStr.contains(".")) {
				return;
			}
		}
		else {
			if(inputStr.contains(".") && inputStr.split("\\.").length == 2) {
				return;
			}
		}
		input.setText(input.getText()+ btnClicked.getText());
	}

	public void btnClear(ActionEvent event) {
		input.setText("");
		firstNum = null;
		secondNum = null;
	}
	
	public void btnOperator(ActionEvent event) {
		if(input.getText().equals("")) {
			return;
		}
		Button btnClicked = (Button)event.getSource();
		if(btnClicked == btnPlus || btnClicked == btnMinus || btnClicked == btnMultiply || btnClicked == btnDivide) {
			operator = btnClicked;
			if(firstNum == null) {
				firstNum = Double.parseDouble(input.getText());
				input.setText("");
			}
			input.setText("");
		}
		else {
			if(btnClicked == btnSqrt) {
				input.setText(String.valueOf(String.format("%.1f", Math.sqrt(Double.parseDouble(input.getText())))));
			}
			else if(btnClicked == btnPlusMinus) {
				input.setText(String.valueOf(String.format("%.1f", Double.parseDouble(input.getText()) * -1)));
			}
			else if(btnClicked == btnPercentage) {
				input.setText(String.valueOf(String.format("%.1f",Double.parseDouble(input.getText())/100)));
			}
			
			if(btnClicked == btnEquals) {
				secondNum = Double.parseDouble(input.getText());
				if(operator == btnPlus) {
					input.setText(String.valueOf(String.format("%.1f",firstNum + secondNum)));
				}
				else if(operator == btnMinus) {
					input.setText(String.valueOf(String.format("%.1f",firstNum - secondNum)));
				}
				else if(operator == btnMultiply) {
					input.setText(String.valueOf(String.format("%.1f",firstNum * secondNum)));
				}
				else if(operator == btnDivide) {
					input.setText(String.valueOf(String.format("%.1f",firstNum / secondNum)));
				}
				firstNum = Double.parseDouble(input.getText());
				secondNum = null;
			}
		}
	}
	
}
