import 'package:flutter/material.dart';

class TopBar extends StatelessWidget {
  const TopBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 100,
      child: Row(
        children: <Widget>[
          const SizedBox(
            height: 80,
            width: 150,
            // child: Image(image: image),)
          ),
          Row(
            mainAxisSize: MainAxisSize.min,
            children: <Widget>[SizedBox(width: 60), _TopBarItem('About')],
          )
        ],
      ),
    );
  }
}

class _TopBarItem extends StatelessWidget {
  final String title;
  const _TopBarItem(this.title);

  @override
  Widget build(BuildContext context) {
    return Text(title, style: TextStyle(fontSize: 18));
  }
}
