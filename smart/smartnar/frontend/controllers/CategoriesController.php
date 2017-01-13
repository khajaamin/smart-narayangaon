<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\rest\ActiveController;

/**
 * Site controller
 */
class CategoriesapiController extends ActiveController
{
    public $modelClass = "common\models\Categories";

}
