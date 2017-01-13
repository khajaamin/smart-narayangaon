<?php
namespace frontend\controllers;

use Yii;
use yii\base\InvalidParamException;
use yii\web\BadRequestHttpException;
use yii\rest\ActiveController;
use yii\web\Response;
use common\models\Ratings; 
use common\models\Users;
use yii\db\Expression;

/**
 * Site controller
 */
class UsersapiController extends ActiveController
{
    public $modelClass = "common\models\Users";


    public function behaviors()
    {
        $behaviors = parent::behaviors();
        $behaviors['contentNegotiator']['formats']['text/html'] = Response::FORMAT_JSON;
        

         // remove authentication filter
        $auth = $behaviors['authenticator'];
        unset($behaviors['authenticator']);
        // add CORS filter
        $behaviors['corsFilter'] = [
            'class' => \yii\filters\Cors::className(),
        ];
        // re-add authentication filter
        $behaviors['authenticator'] = $auth;
        // avoid authentication on CORS-pre-flight requests (HTTP OPTIONS method)
        $behaviors['authenticator']['except'] = ['options'];
        return $behaviors;
    }

    public function actionSignup()
    {
        $model = new Users();

         $data =  json_decode(utf8_encode(file_get_contents("php://input")), false);
         if(empty($data)){

                $response["message"]='sorry something went wrong';
            
            }else{
            
                $model->contact= $data->mobile;
                $model->username = $data->name;
                $model->email = $data->email;
                if($model->validate()){
                        
                    if($model->save(false)){

                        // $random = rand(5000,10000); 
                        // //Sms intrigration goes here
                        // //Send SMS and save otp into same object
                        // $model->otp = $random;

                        // if($model->save())
                        // {
                        //     //Send smsm here 
                        // }

                        $response["message"]="Thank You for Register We will Contact you very soon";
                      
                        return $response;
                
                    }else{
                
                        $response['message']="Error";
                
                        $output = json_encode($response);
                
                        return $output;
                    }

                }else{

                    return array('message'=>$model>getErrors());
                }

            }
    }

    public function actionRating()
    {
        $rating = new Ratings();
        $data =  json_decode(utf8_encode(file_get_contents("php://input")), false); 
        if(empty($data)){

            $response["message"]='sorry something went wrong';
            
        }else{
            $rating->shop_id = 1;
            $rating->value = $data;

            if($rating->save()){

                $response["message"]="Thank You";
                      
                return $response;

            }
        }
    }




}
