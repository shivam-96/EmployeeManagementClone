package CURD_practice.Curd_project.Controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("test")
public class TesterController {
    @GetMapping("")
    public String  test(){
        return "Application is working ";
    }
}
