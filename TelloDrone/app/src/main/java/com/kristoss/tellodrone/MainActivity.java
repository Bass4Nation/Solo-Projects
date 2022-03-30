package com.kristoss.tellodrone;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;

public class MainActivity extends AppCompatActivity {
    Button btn_takeoff, btn_land, btn_command;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
// ----------- Buttons ID ------------------------
        btn_command = findViewById(R.id.btn_connect);
        btn_takeoff = findViewById(R.id.btn_takeoff);
        btn_land = findViewById(R.id.btn_land);
    }
}