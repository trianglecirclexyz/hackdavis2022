import 'package:flutter/material.dart';

class Recipe {
  late String title;
  late String description;
  late int prepTime;
  late int totalTime;
  late int servings;

  Recipe(this.title, this.description,
      {this.prepTime = 0, this.totalTime = 0, this.servings = 0});
}
