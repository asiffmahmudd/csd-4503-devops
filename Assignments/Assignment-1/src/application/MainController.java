package application;

import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.scene.control.Button;

public class MainController {
	@FXML Button clickButton;
	
	public void actionOnClickButton(ActionEvent event) {
		System.out.println("here");
	}
}
