import 'package:flutter/material.dart';
import 'package:eatis/widgets/top_bar.dart';

class Home extends StatelessWidget {
  const Home({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        body: SafeArea(
            child: Container(
                padding: const EdgeInsets.symmetric(
                    vertical: 18.0, horizontal: 16.0),
                child: Column(
                  children: <Widget>[TopBar()],
                ))));
  }
}

//Navigator.push(context, MaterialPageRoute(builder: (context) => const Home()));