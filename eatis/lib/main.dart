import 'package:flutter/material.dart';
import 'package:eatis/views/home.dart';

void main() => runApp(MaterialApp(initialRoute: '/', routes: {
      '/': (context) => const Home(),
      '/login': (context) => const Login(),
    }));
